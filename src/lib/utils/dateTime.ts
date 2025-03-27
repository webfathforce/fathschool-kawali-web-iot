import moment from "moment";
import "moment/locale/id";

moment.locale("id"); 

// Format tanggal (Contoh: 25 Maret 2025)
export const getFormattedDate = (format?: string) => {
  return moment().format(format || "DD MMMM YYYY");
};

// Format waktu (Contoh: 14:30:15)
export const getFormattedTime = () => {
  return moment().format("HH:mm");
};

// Format lengkap (Contoh: Selasa, 25 Maret 2025 - 14:30:15)
export const getFullDateTime = () => {
  return moment().format("dddd, DD MMMM YYYY - HH:mm:ss");
};
