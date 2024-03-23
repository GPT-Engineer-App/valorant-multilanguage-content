import React, { useState } from "react";
import { Box, Heading, Text, VStack, Grid, GridItem, Image, Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FaGlobe, FaChevronDown } from "react-icons/fa";

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "pt", name: "Português" },
  { code: "ru", name: "Русский" },
  { code: "ja", name: "日本語" },
  { code: "ko", name: "한국어" },
];

const Index = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <Box bg="black" minH="100vh" color="white" p={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center" color="red.500">
          Valorant Gameplay & Guides
        </Heading>
        <Box position="absolute" top={4} right={4}>
          <Menu>
            <MenuButton as={Button} rightIcon={<FaChevronDown />}>
              <FaGlobe /> {selectedLanguage.name}
            </MenuButton>
            <MenuList bg="black" borderColor="red.500">
              {languages.map((language) => (
                <MenuItem key={language.code} onClick={() => handleLanguageChange(language)} _hover={{ bg: "red.800" }} _focus={{ bg: "red.800" }}>
                  {language.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
        <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={8}>
          <GridItem>
            <VStack spacing={4} align="stretch">
              <Heading as="h2" size="xl" color="red.500">
                {selectedLanguage.code === "en" ? "Gameplay Clips" : selectedLanguage.code === "es" ? "Videos de Jugabilidad" : selectedLanguage.code === "fr" ? "Clips de Gameplay" : selectedLanguage.code === "de" ? "Gameplay-Clips" : selectedLanguage.code === "pt" ? "Clipes de Jogabilidade" : selectedLanguage.code === "ru" ? "Игровые клипы" : selectedLanguage.code === "ja" ? "ゲームプレイクリップ" : "게임플레이 클립"}
              </Heading>
              <Image src={`https://images.unsplash.com/photo-1570989614585-581ee5f7e165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2YWxvcmFudCUyMGdhbWVwbGF5JTIwJTI0JTdCc2VsZWN0ZWRMYW5ndWFnZS5jb2RlJTdEfGVufDB8fHx8MTcxMTE1NjU1NHww&ixlib=rb-4.0.3&q=80&w=1080`} alt="Gameplay Clip" objectFit="cover" borderRadius="md" />
              <Text>{selectedLanguage.code === "en" ? "Check out the latest Valorant gameplay clips and highlights." : selectedLanguage.code === "es" ? "Mira los últimos videos de jugabilidad y destacados de Valorant." : selectedLanguage.code === "fr" ? "Découvrez les derniers clips de gameplay et faits saillants de Valorant." : selectedLanguage.code === "de" ? "Sieh dir die neuesten Valorant-Gameplay-Clips und Highlights an." : selectedLanguage.code === "pt" ? "Confira os clipes e destaques mais recentes do Valorant." : selectedLanguage.code === "ru" ? "Посмотрите последние клипы и основные моменты игрового процесса Valorant." : selectedLanguage.code === "ja" ? "最新のValorantのゲームプレイクリップとハイライトをチェックしてください。" : "최신 발로란트 게임플레이 클립과 하이라이트를 확인하세요."}</Text>
              <Button colorScheme="red" size="lg">
                {selectedLanguage.code === "en" ? "Watch Now" : selectedLanguage.code === "es" ? "Ver Ahora" : selectedLanguage.code === "fr" ? "Regarder" : selectedLanguage.code === "de" ? "Jetzt ansehen" : selectedLanguage.code === "pt" ? "Assistir Agora" : selectedLanguage.code === "ru" ? "Смотреть" : selectedLanguage.code === "ja" ? "今すぐ見る" : "지금 보기"}
              </Button>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack spacing={4} align="stretch">
              <Heading as="h2" size="xl" color="red.500">
                {selectedLanguage.code === "en" ? "Educational Videos" : selectedLanguage.code === "es" ? "Videos Educativos" : selectedLanguage.code === "fr" ? "Vidéos Éducatives" : selectedLanguage.code === "de" ? "Lehrvideos" : selectedLanguage.code === "pt" ? "Vídeos Educacionais" : selectedLanguage.code === "ru" ? "Обучающие видео" : selectedLanguage.code === "ja" ? "教育用ビデオ" : "교육 영상"}
              </Heading>
              <Image src={`https://images.unsplash.com/photo-1553708881-112abc53fe54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2YWxvcmFudCUyMGd1aWRlJTIwJTI0JTdCc2VsZWN0ZWRMYW5ndWFnZS5jb2RlJTdEfGVufDB8fHx8MTcxMTE1NjU1NHww&ixlib=rb-4.0.3&q=80&w=1080`} alt="Educational Video" objectFit="cover" borderRadius="md" />
              <Text>{selectedLanguage.code === "en" ? "Learn tips, tricks, and strategies to improve your Valorant gameplay." : selectedLanguage.code === "es" ? "Aprende consejos, trucos y estrategias para mejorar tu juego en Valorant." : selectedLanguage.code === "fr" ? "Apprenez des astuces, des trucs et des stratégies pour améliorer votre gameplay sur Valorant." : selectedLanguage.code === "de" ? "Lerne Tipps, Tricks und Strategien, um dein Valorant-Gameplay zu verbessern." : selectedLanguage.code === "pt" ? "Aprenda dicas, truques e estratégias para melhorar sua jogabilidade no Valorant." : selectedLanguage.code === "ru" ? "Узнайте советы, приемы и стратегии, чтобы улучшить свою игру в Valorant." : selectedLanguage.code === "ja" ? "Valorantのゲームプレイを向上させるためのヒント、コツ、戦略を学びましょう。" : "발로란트 게임플레이를 향상시키기 위한 팁, 트릭, 전략을 배우세요."}</Text>
              <Button colorScheme="red" size="lg">
                {selectedLanguage.code === "en" ? "Learn Now" : selectedLanguage.code === "es" ? "Aprende Ahora" : selectedLanguage.code === "fr" ? "Apprendre" : selectedLanguage.code === "de" ? "Jetzt lernen" : selectedLanguage.code === "pt" ? "Aprenda Agora" : selectedLanguage.code === "ru" ? "Учить" : selectedLanguage.code === "ja" ? "今すぐ学ぶ" : "지금 배우기"}
              </Button>
            </VStack>
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
};

export default Index;
