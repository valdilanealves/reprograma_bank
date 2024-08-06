import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: 'error', // Nível de log (error, warn, info, etc.)
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [
    new transports.File({ filename: 'application.log' }) // Arquivo onde os logs serão armazenados
  ],
});

export default logger;
