import Style from './style.css';

function Flags({ flagImg, flagAlt, flagName }) {
  return (
    <div className={Style.main}>
      <div className={Style.inner}>
        <img src={flagImg} alt={flagAlt} style={{width:"100px", height:"100px"}} />
        <h2>{flagName}</h2>
      </div>
    </div>
  );
}

export default Flags;