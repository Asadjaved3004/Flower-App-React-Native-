import React, { useState } from 'react';
import { Avatar, Button, Card, Text, Searchbar, Appbar, Menu, IconButton } from 'react-native-paper';
import { StyleSheet, Platform, Linking, ScrollView, TouchableHighlight } from 'react-native';


import { Provider as PaperProvider } from 'react-native-paper';
//Navigation


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;


const FlowerDetails = ({ navigation }) => {

  const text = "Sometimes known as Fairy Wand, this pretty evergreen perennial looks great anywhere in the garden. Particularly where you can appreciate its arching stems, such as along edges, walls, or over ponds.";
  const text1 = "One stem carries a single flower, comprising a central disc surrounded by bright petals. The petals of some species are variegated in color, offering the most stunning bloom.";
  const text2 = "These evergreen perennials reach heights of up to one meter and produce erect stems carrying a globe-shaped display of blue, lilac, or white blooms.";
  const text3 = "They are long-blooming from early summer until the first frost, and they need minor assistance to thrive. They are ideal for beds, borders, and patio pots. ";
  const text4 = "These plants come in almost every color and have a frilly or fringed texture to the petals. They will bloom nearly every day if in bright and dependable lighting. The foliage is typically green or variegated, with a slight fuzz in texture.";
  const text5 = "There are five types of Amaryllis; large flowering, double flowering, small flowering, cybister, and trumpet. The most popular is the large flowering, single flower Amaryllis, which grows up to 10 inches tall.";
  const text6 = "This might not be as popular as the Sacred Lotus that is more often seen in cultivation. But these flowers provide a blanket of elegance thanks to their pure white petals and a yellow center. ";
  const text7 = "Sometimes known as Fairy Wand, this pretty evergreen perennial looks great anywhere in the garden. Particularly where you can appreciate its arching stems, such as along edges, walls, or over ponds.";
  const url = "https://www.epicgardening.com/types-of-flowers/";

  const handlePress = () => {
    Linking.openURL(url);
  };
  const [searchQuery, setSearchQuery] = useState('');
  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);





  return (
    <PaperProvider>

      <ScrollView>
        <Card>
          <Appbar.Header>
            <Appbar.Content title="Flowers" subtitle="Subtitle" />
            <Appbar.Action icon="magnify" onPress={() => { }} />
            <Menu
              visible={menuVisible}
              onDismiss={closeMenu}
              anchor={<IconButton icon={MORE_ICON} onPress={openMenu} />}
            >
              <Menu.Item onPress={() => { }} title="Profile" />

              <Menu.Item onPress={() => { }} title="About" />
              <Menu.Item onPress={() => { }} title="Settings" />
            </Menu>
          </Appbar.Header>
          <Searchbar
            style={styles.search}
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
          <Card.Title left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">African Dalsy</Text>
            <Text>
              {text}
              <TouchableHighlight onPress={handlePress} underlayColor="transparent">
                <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
                  {" For more details,Read us."}
                </Text>
              </TouchableHighlight>
            </Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://www.epicgardening.com/wp-content/uploads/2023/09/African-Daisy.jpg' }} />

          <Card.Title left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">African Lilly</Text>
            <Text>
              {text1}
              <TouchableHighlight onPress={handlePress} underlayColor="transparent">
                <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
                  {" For more details,Read us."}
                </Text>
              </TouchableHighlight>
            </Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://www.epicgardening.com/wp-content/uploads/2023/09/African-Lily.jpg' }} />

          <Card.Title left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">African Marlgold</Text>
            <Text>
              {text2}
              <TouchableHighlight onPress={handlePress} underlayColor="transparent">
                <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
                  {" For more details,Read us."}
                </Text>
              </TouchableHighlight>
            </Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://www.epicgardening.com/wp-content/uploads/2023/09/African-Marigold.jpg' }} />

          <Card.Title left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">African Violet</Text>
            <Text>
              {text3}
              <TouchableHighlight onPress={handlePress} underlayColor="transparent">
                <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
                  {" For more details,Read us."}
                </Text>
              </TouchableHighlight>
            </Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://www.epicgardening.com/wp-content/uploads/2023/09/African-Violet.jpg' }} />
          <Card.Title left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">Amaryllis</Text>
            <Text>
              {text4}
              <TouchableHighlight onPress={handlePress} underlayColor="transparent">
                <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
                  {" For more details,Read us."}
                </Text>
              </TouchableHighlight>
            </Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://www.epicgardening.com/wp-content/uploads/2023/09/Amaryllis.jpg' }} />

          <Card.Title left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">African Lotus</Text>
            <Text>
              {text5}
              <TouchableHighlight onPress={handlePress} underlayColor="transparent">
                <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
                  {" For more details,Read us."}
                </Text>
              </TouchableHighlight>
            </Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://www.epicgardening.com/wp-content/uploads/2023/09/American-Lotus.jpg' }} />

          <Card.Title left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">Angels Fishing Rod</Text>
            <Text>
              {text6}
              <TouchableHighlight onPress={handlePress} underlayColor="transparent">
                <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
                  {" For more details,Read us."}
                </Text>
              </TouchableHighlight>
            </Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://www.epicgardening.com/wp-content/uploads/2023/09/American-Fishing-Rod.jpg' }} />

          <Card.Title left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">Aztec Lillies</Text>
            <Text>
              {text7}
              <TouchableHighlight onPress={handlePress} underlayColor="transparent">
                <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
                  {" For more details,Read us."}
                </Text>
              </TouchableHighlight>
            </Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://www.epicgardening.com/wp-content/uploads/2023/09/Aztec-Lily.jpg' }} />

        </Card>
      </ScrollView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  search: {
    marginTop: 35,
  },
});

export default FlowerDetails;
