import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";
import { Feather } from "@expo/vector-icons";

export default function Card({ wind, humidity, visibility }) {
	return (
		<Wrapper>
			<Container>
				<Feather name="wind" size={35} color={"white"} />
				<StyledNum>{`${Math.round(wind)} mph`}</StyledNum>
				<StyledText>Wind</StyledText>
			</Container>
			<Container>
				<Feather name="droplet" size={35} color={"white"} />
				<StyledNum>{`${humidity}%`}</StyledNum>
				<StyledText>Humidity</StyledText>
			</Container>
			<Container>
				<Feather name="eye" size={35} color={"white"} />
				<StyledNum>{`${Math.round(visibility / 1000)} km`}</StyledNum>
				<StyledText>Visibility</StyledText>
			</Container>
		</Wrapper>
	);
}

const Wrapper = styled(View)`
	margin: 20px;
	padding-top: 20px;
	padding-bottom: 20px;
	background-color: black;
	justify-content: space-evenly;
	flex-direction: row;
	border-width: 1px;
	border-radius: 15px;
`;

const Container = styled(View)`
	align-items: center;
	gap: 2px;
`;

const StyledText = styled(Text)`
	color: white;
`;

const StyledNum = styled(StyledText)`
	font-weight: bold;
	padding-top: 8px;
	font-size: 16px;
`;
