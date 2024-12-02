import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Drop({ title, content }) {

  return (
    <div>
      <Accordion sx={{ backgroundColor: "#f9f9f9" }}>
        <AccordionSummary
          sx={{
            '&:hover': {
              textDecoration: 'underline',
            },  
          }}
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          {title}
        </AccordionSummary>
        <AccordionDetails>
          {content}
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
