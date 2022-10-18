import castiel1 from '../../../assets/castiel/castiel1.jpg';
import castiel2 from '../../../assets/castiel/castiel2.jpg';
import castiel3 from '../../../assets/castiel/castiel3.jpg';
import castiel4 from '../../../assets/castiel/castiel4.jpg';

export const Castiel = () => {
  return (
    <div className="gallery">
    <h1>Castiel</h1>
    <div className="gallery-grid">
      <img src={castiel1} />
      <img src={castiel2} />
      <img src={castiel3} />
      <img src={castiel4} />
    </div>
  </div>
  )
}