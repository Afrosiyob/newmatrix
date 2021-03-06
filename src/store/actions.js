import { notification } from "antd";

export const openNotificationWithIcon = (
  type,
  message = "Notification Title",
  description = "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
  bottomRight
) => {
  notification[type]({
    message,
    description,
  });
};
