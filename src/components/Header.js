import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";
import { Feather } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
	const openMenu = () => {
		navigation.openDrawer();
	};

	return (
		<Wrapper>
			<Icon name="menu" size={28} onPress={openMenu} />
			<HeaderText>{title}</HeaderText>
		</Wrapper>
	);
}

const Wrapper = styled(View)`
	width: 100%;
	height: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

const Icon = styled(Feather)`
	position: absolute;
	left: 0;
`;

const HeaderText = styled(Text)`
	font-weight: bold;
	font-size: 20px;
`;
