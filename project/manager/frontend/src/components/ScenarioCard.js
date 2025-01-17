import * as React from 'react';
import { Stack, Typography, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';
import { green, yellow, red } from '@mui/material/colors';
import Chip from '@mui/material/Chip';

const ScenarioCard = ({ setModalOpen, name, description, category, difficulty, image, author, targets, bot }) => {
    const colors = {
        "Easy": green[700],
        "Medium": yellow[700],
        "Hard": red[500]
    };

    return (
        <Card sx={{ maxWidth: 500, margin: "auto" }}>
            <CardActionArea onClick={() => { setModalOpen(true); }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={`http://${process.env.REACT_APP_MACHINE_HOSTNAME}:8000/images/${image}`}
                    alt="scenario image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '1',
                        WebkitBoxOrient: 'vertical',
                    }}>
                        {description}
                    </Typography>
                    <Stack direction="row" alignItems="center" gap={1} marginTop="0.5em">
                        <Chip label={difficulty} sx={{ backgroundColor: colors[difficulty], color: "white" }} />
                        <Chip label={category} sx={{ backgroundColor: "black", color: "white" }} />
                        {/* <GridViewIcon sx={{ color: colors[difficulty] }} />{category} */}
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ScenarioCard;