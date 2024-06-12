import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import Modal from "../components/Modal";
import { useAppStore } from "../stores/useAppStore";
import { useEffect } from "react";
import Notification from "../components/Notification";

export const Layout = () => {

  const loadFavorites = useAppStore(state => state.loadFavorites);

  useEffect(() => {
    loadFavorites();
  }, [])

  return (
    <div>
      <Header />
      <main className="container mx-auto py-16">
        <Outlet />
      </main>

      <Modal/>
      <Notification/>
    </div>
  );
};
