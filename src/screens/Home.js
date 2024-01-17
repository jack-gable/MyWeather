import { View, Text } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components";
import { weatherType } from "../utils/weatherType";
import moment from "moment";
import Card from "../components/Card";

export default function Home({ weatherData, cityData }) {
	const { name } = cityData;
	const {
		dt_txt,
		main: { temp, feels_like, temp_max, temp_min, humidity },
		weather,
		wind: { speed },
		visibility,
	} = weatherData;

	const weatherCondition = weather[0]?.main;

	return (
		<Wrapper
		// style={{
		// 	backgroundColor: weatherType[weatherCondition]?.backgroundColor,
		// }}
		>
			<Container>
				<TempContainer>
					<CityName>{name}</CityName>
					<DateWrapper>
						<Date>{moment(dt_txt).format("dddd[, ] MMMM Do")}</Date>
					</DateWrapper>
					<Feather name={weatherType[weatherCondition]?.icon} size={100} />
					<Temp>{`${Math.round(temp)}°`}</Temp>
				</TempContainer>
				<SummaryContainer>
					<SummaryTitle>Daily Summary</SummaryTitle>
					<Description>{weather[0].description}</Description>
					<SummaryTemp>{`Feels like ${Math.round(feels_like)}°`}</SummaryTemp>
					<SummaryTemp>{`High: ${Math.round(temp_max)}° / Low: ${Math.round(
						temp_min
					)}°`}</SummaryTemp>
				</SummaryContainer>
			</Container>
			<Card wind={speed} humidity={humidity} visibility={visibility} />
		</Wrapper>
	);
}

const Wrapper = styled(View)`
	flex: 1;
`;

const Container = styled(View)`
	align-items: center;
`;

const TempContainer = styled(Container)`
	gap: 6px;
`;

const Temp = styled(Text)`
	font-size: 100px;
`;

const CityName = styled(Text)`
	font-size: 34px;
	padding-bottom: 8px;
	font-weight: bold;
`;

const DateWrapper = styled(View)`
	border-width: 1px;
	border-radius: 30px;
	background-color: black;
	padding-top: 4px;
	padding-bottom: 4px;
	padding-right: 8px;
	padding-left: 8px;
`;

const Date = styled(Text)`
	color: white;
`;

const SummaryContainer = styled(View)`
	align-self: flex-start;
	padding-left: 20px;
	padding-top: 20px;
`;

const SummaryTitle = styled(Text)`
	font-size: 20px;
	font-weight: bold;
	padding-bottom: 8px;
`;

const SummaryTemp = styled(Text)`
	font-size: 18px;
`;

const Description = styled(SummaryTemp)`
	text-transform: capitalize;
`;
