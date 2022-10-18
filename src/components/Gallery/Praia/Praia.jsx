import praia1 from '../../../assets/praia/praia1.jpg';
import praia2 from '../../../assets/praia/praia2.jpg';
import praia3 from '../../../assets/praia/praia3.jpg';
import praia4 from '../../../assets/praia/praia4.jpg';

export const Praia = () => {
  return (
    <div className="gallery">
      <h1>Praia</h1>
      <div className="gallery-grid">
        <img src={praia1} />
        <img src={praia2} />
        <img src={praia3} />
        <img src={praia4} />
      </div>
    </div>
  )
}