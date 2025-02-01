export const DateFormatter = (timestamp: number): string => {
    const data = new Date(timestamp);
  
    const day = String(data.getDate()).padStart(2, "0");
    const month = String(data.getMonth() + 1).padStart(2, "0"); 
    const year = data.getFullYear();
    const hour = String(data.getHours()).padStart(2, "0");
    const minute = String(data.getMinutes()).padStart(2, "0");
  
    return `${day}/${month}/${year} ${hour}:${minute}`;
  };

export const DateDifference = (timestamp: number): string => {
    const now = Date.now();
    const difference = now - timestamp;
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hours ago`;
    if (days < 7) return `${days} days ago`;
  
    const data = new Date(timestamp);
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    const hoursStr = String(data.getHours()).padStart(2, "0");
    const minutesStr = String(data.getMinutes()).padStart(2, "0");
  
    return `${dia}/${mes}/${ano} ${hoursStr}:${minutesStr}`;
  };