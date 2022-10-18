import familia1 from '../../../assets/familia/familia1.jpg';
import familia2 from '../../../assets/familia/familia2.jpg';
import familia3 from '../../../assets/familia/familia3.jpg';
import familia4 from '../../../assets/familia/familia4.jpg';

export const Casa = () => {
  return (
    <div className="gallery">
      <h1>Casa</h1>
      <div className="gallery-grid">
        <img src={familia1} />
        <img src={familia2} />
        <img src={familia3} />
        <img src={familia4} />
      </div>
    </div>
  )
}