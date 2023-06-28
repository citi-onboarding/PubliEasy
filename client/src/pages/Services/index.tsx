import React, { useState, useEffect } from "react";
import axios from "axios";
import { ServicesContainer, ServicesH1, ServicesP, ServicesImg, HorizontalLine, ItemImg, Title, Products } from './styles';
import { Product } from '../../assets';

type ServiceProps = {
    id: number;
    name: string;
    description: string;
    image: string;
};

export const Service: React.FC = () => {
  const [services, setServices] = useState<ServiceProps[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:3001/service"); // Replace "/api/services" with your actual API endpoint to fetch services
        setServices(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchServices();
  }, []);

  return (
    <ServicesContainer id="Services">
      <Title>
        <ServicesH1>Nosso Serviço</ServicesH1>
        <HorizontalLine></HorizontalLine>
      </Title>
      <Products>
        {services.map((service) => (
          <ServicesImg key={service.id}>
            <ItemImg src={service.image || Product} alt="" />
            <ServicesP>{service.description}</ServicesP>
            <ServicesP>
              <strong>
                <a href="#" style={{ color: 'black', textDecoration: 'none' }}>{service.name}</a>
              </strong>
            </ServicesP>
          </ServicesImg>
        ))}
      </Products>
    </ServicesContainer>
  );
};
