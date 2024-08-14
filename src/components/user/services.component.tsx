import { useState, useEffect } from "react";
import Service from "./service.component";
import { getServices } from "../../api";


import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';



// const Services = () => {
  // const [services, setServices] = useState([]);
  // const [error, setError] = useState(Error);

  // useEffect(() => {
  //   const loadServices = async () => {
  //     try {
  //       const data = await getServices();
  //       setServices(data.data);
  //     } catch (error) {
  //       setError(new Error("Failed to fetch items"));
  //     }
  //   };

  //   loadServices();
  // }, []);

//   return (
//     <div>
//       <p>
//         שירותי אולפן: חלמת להקליט את השיר שלך? באולפן המקצועי שלי, את יכולה
//         להפוך את החלום שלך למציאות. אני מציעה הקלטה, עריכה ומיקס לשירים מקוריים
//         וכיסויים. שירים והופעות: מוסיקה חיה לכל אירוע! הופעות מותאמות אישית,
//         רפרטואר מגוון, ושירים שנוגעים ללב. הרקדות לאירועי נשים/בתי ספר: חגיגה
//         נשית עם מוסיקה וריקודים! הרקדות מיוחדות שמחברות בין נשים, מעצימות
//         ומביאות אושר. הפעלות תכנית מוזיקלית לבת מצווה: בת מצווה שכולה מוסיקה!
//         הפעלות אינטראקטיביות, שירה, ריקוד, יצירה מוזיקלית, וחוויה בלתי נשכחת.
//         קורסי פיתוח קול: רוצה לשפר את הקול שלך? בקורסים שלי תלמדי טכניקות נכונות
//         לשירה, תגברי את הביטחון העצמי שלך, ותגלי את הקול הייחודי שלך.
//       </p>
//       <ul>
//         {services.map((service, index) => (
//           <li key={index}>
//             <Service serviceData={service} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };


const data = [
  {
    src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
    title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
    channel: 'Don Diablo',
    views: '396k views',
    createdAt: 'a week ago',
  },
  {
    src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
    title: 'Queen - Greatest Hits',
    channel: 'Queen Official',
    views: '40M views',
    createdAt: '3 years ago',
  },
  {
    src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
    title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
    channel: 'Calvin Harris',
    views: '130M views',
    createdAt: '10 months ago',
  },
];

interface MediaProps {
  loading?: boolean;
}

function Media(props: MediaProps) {
  const { loading = false } = props;


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
    <Grid container wrap="nowrap">
      {/* <ul>
//         {services.map((service, index) => (
//           <li key={index}>
//             <Service serviceData={service} />
//           </li>
//         ))}
//       </ul> */}
      {(loading ? Array.from(new Array(services.length)) : services).map((service, index) => (
        <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
          {service ? (
            <img
              style={{ width: 210, height: 118 }}
              alt={service.name}
              src={service.image}
            />
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}
          {service ? (
            <Box sx={{ pr: 2 }}>
              <Typography gutterBottom variant="body2">
                {service.name}
              </Typography>
              <Typography display="block" variant="caption" color="text.secondary">
                {service.description}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {/* {`${service.views} • ${service.createdAt}`} */}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

export default function YouTube() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Media loading />
      <Media />
    </Box>
  );
}
// export default Services;
