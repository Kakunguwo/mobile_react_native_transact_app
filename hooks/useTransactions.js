import { useCallback, useState } from "react";
import { Alert } from "react-native";

const API_URL =
  "https://react-native-transaction-express-server.onrender.com/api/v1";

export const useTransactions = (userId) => {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({
    income: 0,
    balance: 0,
    expenses: 0,
  });
  const [loading, setLoading] = useState(true);

  const fetchTransactions = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/transactions/user/${userId}`);

      const data = await response.json();

      console.log("Fetched transactions: ", data);

      setTransactions(data?.data);
    } catch (error) {
      console.log("Error fetching transactions: ", error);
    }
  }, [userId]);

  const fetchSummary = useCallback(async () => {
    try {
      const response = await fetch(
        `${API_URL}/transactions/summary/user/${userId}`
      );

      const data = await response.json();

      setSummary(data?.data);
    } catch (error) {
      console.log("Error fetching transactions: ", error);
    }
  }, [userId]);

  const loadData = useCallback(async () => {
    if (!userId) return;

    setLoading(true);

    try {
      await Promise.all([fetchTransactions(), fetchSummary()]);
    } catch (error) {
      console.log("Error loading data: ", error);
    } finally {
      setLoading(false);
    }
  }, [fetchSummary, fetchTransactions, userId]);

  const deleteTransaction = async (id) => {
    try {
      const response = await fetch(
        `${API_URL}/transactions/user/${userId}/${id}`
      );

      if (!response.ok) throw new Error("Failed to delete transaction");

      loadData();
    } catch (error) {
      console.log("Error deleting transaction: ", error);
      Alert.alert("Error", error.message);
    }
  };

  return { loadData, deleteTransaction, transactions, summary, loading };
};
