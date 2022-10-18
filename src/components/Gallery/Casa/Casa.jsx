import casa1 from '../../../assets/casa/casa1.jpg';
import casa2 from '../../../assets/casa/casa2.jpg';
import casa3 from '../../../assets/casa/casa3.jpg';
import casa4 from '../../../assets/casa/casa4.jpg';

export const Casa = () => {
  return (
    <div className="gallery">
      <h1>Casa</h1>
      <div className="gallery-grid">
        <img src={casa1} />
        <img src={casa2} />
        <img src={casa3} />
        <img src={casa4} />
      </div>
    </div>
  )
}