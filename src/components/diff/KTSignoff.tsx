import React from 'react';
import { Typography, Button, Container } from '@mui/material';

const KTSignoff: React.FC = () => {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        KT (Knowledge Transfer) Sign-off
      </Typography>
      <Button variant="contained" color="primary" href="/files/kt_signoff.docx" download>
        Download KT Sign-off Document
      </Button>
    </Container>
  );
};

export default KTSignoff;
