import { useState, useEffect } from "react";
import Service from "./service.component";
import { getServices } from "../../api";
const Services = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(Error);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await getServices();
        setServices(data.data);
      } catch (error) {
        setError(new Error("Failed to fetch items"));
      }
    };

    loadServices();
  }, []);

  return (
    <div>
      <p>
        שירותי אולפן: חלמת להקליט את השיר שלך? באולפן המקצועי שלי, את יכולה
        להפוך את החלום שלך למציאות. אני מציעה הקלטה, עריכה ומיקס לשירים מקוריים
        וכיסויים. שירים והופעות: מוסיקה חיה לכל אירוע! הופעות מותאמות אישית,
        רפרטואר מגוון, ושירים שנוגעים ללב. הרקדות לאירועי נשים/בתי ספר: חגיגה
        נשית עם מוסיקה וריקודים! הרקדות מיוחדות שמחברות בין נשים, מעצימות
        ומביאות אושר. הפעלות תכנית מוזיקלית לבת מצווה: בת מצווה שכולה מוסיקה!
        הפעלות אינטראקטיביות, שירה, ריקוד, יצירה מוזיקלית, וחוויה בלתי נשכחת.
        קורסי פיתוח קול: רוצה לשפר את הקול שלך? בקורסים שלי תלמדי טכניקות נכונות
        לשירה, תגברי את הביטחון העצמי שלך, ותגלי את הקול הייחודי שלך.
      </p>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <Service serviceData={service} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Services;
