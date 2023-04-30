import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import { requestForToken, onMessageListener, messaging } from "./firebase";

import { Wrapper, ToastContent, ToastTitle, ToastText } from "./styles";

interface INotification {
  title?: string;
  body?: string;
}

const Notification = () => {
  const [notification, setNotification] = useState<INotification>({
    title: "",
    body: "",
  });

  const notify = () => toast(<ToastDisplay />);

  const ToastDisplay = () => {
    return (
      <Wrapper>
        <ToastContent>
          <ToastTitle>{notification?.title ?? "Toast title"}</ToastTitle>
          <ToastText>{notification?.body ?? "Toast text"}</ToastText>
        </ToastContent>
      </Wrapper>
    );
  };

  requestForToken(messaging).catch(console.error);

  onMessageListener()
    .then((payload) => {
      setNotification({
        title: payload?.notification?.title,
        body: payload?.notification?.body,
      });
    })
    .catch(console.error);

  useEffect(() => {
    if (notification?.title) {
      notify();
    }
  }, [notification]);

  return <Toaster />;
};

export default Notification;
