import { Link } from "react-router-dom";

const Home = () => {
const log = (event: React.MouseEvent<HTMLAnchorElement>): void => {
  event.preventDefault();
  console.log("You clicked a link!");
};


  return (
    <div>
      <h2>Welcome to Photography Business</h2>
      <div>
        שירה - המוזיקה שלך, החלום שלך. אני שירה, מוזיקאית ומורה לפיתוח קול,
        ומביאה את האהבה שלי למוסיקה לכל אירוע וחיים. בין אם את רוצה להקליט שיר
        מקורי, להוסיף קצת מוסיקה חיה לאירוע שלך, או לשפר את יכולות השירה שלך -
        אני כאן כדי לעזור לך להגשים את החלום המוזיקלי שלך. אני מציעה מגוון רחב
        של שירותים מוזיקליים, כולל: הקלטות באולפן: הקליטי את השיר שלך באולפן
        מקצועי. הופעות: מוסיקה חיה לכל אירוע. הרקדות: חגיגה נשית עם מוסיקה
        וריקודים. הפעלות לבת מצווה: בת מצווה שכולה מוסיקה. קורסי פיתוח קול: שפרי
        את יכולות השירה שלך. מוזמנת ליצור קשר ולהתחיל את המסע המוזיקלי שלך איתי!
      </div>
      <div>
        <Link onClick={log}
         to="/services">הזמיני הופעה </Link>
        <Link to="/services">הירשמי לקורס </Link>
        <Link to="/contact-form">צרי קשר </Link>
        <Link to="/blog">בלוג </Link>
      </div>
    </div>
  );
};

export default Home;
