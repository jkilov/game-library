import { Button, Heading, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectGenre: Genre | null;
}


const GenreList = ({onSelectGenre, selectGenre}: Props) => {
 const { data, isLoading, error } = useGenres();


 if (isLoading) return < Spinner />
 if (error) return null;

 return (

<>
  <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
   <List>
     {data.map((genre) => (
       <ListItem paddingY='5px' key={genre.id}><HStack> < Image objectFit='cover' boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
       <Button
       fontWeight = {genre.id === selectGenre?.id ? 'bold' : 'normal'}
       whiteSpace='normal'
       textAlign='left'
       onClick={()=>onSelectGenre(genre)}
       variant='link' fontSize='lg'>{genre.name}</Button>
       </HStack></ListItem>
     ))}
   </List>
   </>
 );
};


export default GenreList;