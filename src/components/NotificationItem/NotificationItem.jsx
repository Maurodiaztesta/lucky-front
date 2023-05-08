import './NotificationItem.css';

function NotificationItem({ notification }) {
    return (
      <div className="notification_container">
        <h2>{notification?.title ?? 'Sin título'}</h2>
        <p>{notification?.body}</p>
        <small>{notification?.timestamp?.toLocaleString()}</small>
      </div>
    );
  }
  
  export default NotificationItem;