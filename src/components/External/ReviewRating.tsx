import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';

const ReviewRating = styled(Rating)({
    marginTop: '12px',
    '& .MuiRating-iconFilled': {
        color: '#e46770',
    },
    '& .MuiRating-iconHover': {
        color: '#DA2C38',
    },
});

export default ReviewRating