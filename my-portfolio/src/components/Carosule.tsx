import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carousel = () => {
  const projects = [
    { id: 1, title: "Progetto 1", description: "Descrizione 1" },
    { id: 2, title: "Progetto 2", description: "Descrizione 2" },
  ];

  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
