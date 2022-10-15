import { useAppSelector } from "../../store/hooks";

import { selectPhotoById } from "../../store/modules/collections/photos/selectors";

import Slide from "../../components/slide/Slide";

const SlideContainer = (props: { photoId: number }) => {
    const { photoId } = props;
    const photo = useAppSelector(state => selectPhotoById(state, photoId));
    return (
        <>
            {photo ? <Slide title={photo.title} img={photo.url}/> : null }              
        </>
    )
}

export default SlideContainer;