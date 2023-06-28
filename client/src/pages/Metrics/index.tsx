import React, { useEffect, useState } from "react";
import axios from "axios";
import { MainContainer, UpContainer, DownContainer, Image, Paragraph, MetricData, Circle, Description } from './styles';
import { Image1, Image2 } from '../../assets';

type ServiceProps = {
    id: number;
    metric: string | undefined;
    metricDescription: string | undefined;
    metric2: string | undefined;
    metricDescription2: string | undefined;
    metric3: string | undefined;
    metricDescription3: string | undefined;
};

export const Metrics: React.FC = () => {
    const [metrics, setMetrics] = useState<ServiceProps[]>([]);

    useEffect(() => {
        const fetchMetrics = async () => {
            try {
                const response = await axios.get("http://localhost:3001/metric");
                setMetrics(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMetrics();
    }, []);

    return (
        <MainContainer id="Metrics">
            <UpContainer>
                <Image src={Image1} alt=""/>
                <Description>
                    <MetricData>
                        <Circle><p>{metrics[0]?.metric}</p></Circle>
                        <Paragraph>{metrics[0]?.metricDescription}</Paragraph>
                    </MetricData>
                    <MetricData>
                        <Circle><p>{metrics[0]?.metric2}</p></Circle>
                        <Paragraph>{metrics[0]?.metricDescription2}</Paragraph>
                    </MetricData>
                    <MetricData>
                        <Circle><p>{metrics[0]?.metric3}</p></Circle>
                        <Paragraph>{metrics[0]?.metricDescription3}</Paragraph>
                    </MetricData>
                </Description>
            </UpContainer>
            <DownContainer>
                <Image src={Image2} alt=""/>
                <Description>
                    <MetricData>
                        <Circle><p>{metrics[1]?.metric}</p></Circle>
                        <Paragraph>{metrics[1]?.metricDescription}</Paragraph>
                    </MetricData>
                    <MetricData>
                        <Circle><p>{metrics[1]?.metric2}</p></Circle>
                        <Paragraph>{metrics[1]?.metricDescription2}</Paragraph>
                    </MetricData>
                    <MetricData>
                        <Circle><p>{metrics[1]?.metric3}</p></Circle>
                        <Paragraph>{metrics[1]?.metricDescription3}</Paragraph>
                    </MetricData>
                </Description>
            </DownContainer>
        </MainContainer>
    );
};
