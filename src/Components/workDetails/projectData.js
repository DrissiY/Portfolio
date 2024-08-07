import teilenGif from "../../Assets/teilen-videospeed.gif";
import artist1 from "../../Assets/Artist1.png";
import artist2 from "../../Assets/Artist 2.png";
import artist3 from "../../Assets/Artist 3.png";
import lirikaiGif from "../../Assets/lirikaigif.gif";
import lirikaiImg1 from "../../Assets/lirikai1.png";
import lirikaiImg2 from "../../Assets/lirikai2.png";
import lirikaiImg3 from "../../Assets/lirikai3.png";
import lbagif from "../../Assets/Lbagif.gif"
import map from "../../Assets/lbamap.png"
import planninglba from "../../Assets/lba-planing.png"
import cpf from "../../Assets/CPF.png"


export const projectData = {
  teilen: {
    id: 'teilen',
    title: 'Teilen',
    gif: teilenGif,
    niche: 'Teilen is a music promotion platform connecting artists with playlist curators. It allows curators to set their promotion rates and durations, empowering them while offering artists transparent promotional options. This fosters authentic connections and organic growth.',
    development: 'Teilen leverages Java with Spring Boot for its backend and Next.js with React.js for the frontend. It uses PostgreSQL for structured data and MongoDB for unstructured data, combined with real-time features via Socket.io, and GraphQL for efficient data querying.',
    design: 'Teilen’s user-centric design uses Tailwind CSS for responsive styling, creating a clean, modern interface. Custom dashboards provide personalized insights, and features like dark mode and real-time notifications enhance accessibility and user experience.',
    description: 'Teilen is a cutting-edge music promotion platform designed to connect artists with playlist curators. Unlike traditional services, Teilen allows curators to set their own rates and durations for promotions, providing transparency and flexibility for artists. This unique approach empowers curators to monetize their playlists while offering artists a customizable promotion experience. By fostering authentic connections and ensuring organic growth, Teilen aims to create a dynamic ecosystem where music can flourish. The platform features an intuitive interface, real-time communication, and comprehensive analytics, making it easy for artists to manage their campaigns and reach new audiences effectively.',
    images: [
      artist1,
      artist2,
      artist3,
    ],
  },

  lirikai: {
    id: 'lirikai',
    title: 'Lirikai',
    gif: lirikaiGif,
    niche: 'Lirikai is an AI-driven platform helping artists generate custom lyrics based on their preferred artists, mood, audience, and more. It assists songwriters and musicians in creating engaging songs, overcoming writer\'s block, and exploring new creative avenues.',
    development: 'Lirikai leverages Node.js with Express for its backend and React.js for the frontend. It uses MongoDB for data management, combined with real-time features via WebSocket, and the ChatGPT API for AI-driven lyric generation and chat capabilities.',
    design: 'Lirikai’s user-centric design uses Material-UI for responsive styling, creating a clean, modern interface. Custom dashboards provide personalized insights, and features like dark mode and real-time notifications enhance accessibility and user experience.',
    description: 'Lirikai is a revolutionary AI-driven platform designed to assist artists in generating custom lyrics. By analyzing preferred artists, mood, audience, and more, Lirikai helps songwriters and musicians create engaging songs, overcome writer\'s block, and explore new creative avenues. The platform offers an intuitive interface, real-time communication, and comprehensive analytics, making it easy for users to manage their creative process and produce high-quality lyrics effectively.',
    images: [
      lirikaiImg1,
      lirikaiImg2,
      lirikaiImg3,
    ],
  },

  lba: {
    id: 'lba',
    title: 'La Bonne Allure',
    gif: lbagif,
    niche: 'La Bonne Allure is an online driving school offering flexible and affordable driving lessons across France.',
    development: 'La Bonne Allure leverages Angular for the frontend and Symfony for the backend. It uses Tailwind CSS for styling, creating a responsive and modern user interface.',
    design: 'La Bonne Allure’s design focuses on user-friendliness and accessibility, utilizing Tailwind CSS for clean and responsive layouts. The platform offers a seamless user experience with intuitive navigation and real-time updates.',
    description: 'La Bonne Allure is an online driving school in France that provides comprehensive driving education. The platform allows users to choose their instructor and schedule, making driving education accessible and convenient. With features like online theory courses, experienced instructors, and personalized lesson plans, La Bonne Allure ensures a flexible and affordable learning experience.',
    images: [
      map,
      planninglba,
      cpf,
    ],
  },

};
