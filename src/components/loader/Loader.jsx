import cl from './style.module.css';

export default function Loader() {
  return (
    <div className={`${cl.loader} z-50`}>
      <div className={cl.dot1}></div>
      <div className={cl.dot2}></div>
      <div className={cl.dot3}></div>
    </div>
  );
}
