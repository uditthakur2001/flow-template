import React from 'react';
import { Typography, Button, Container } from '@mui/material';

const ProjectDocs: React.FC = () => {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Project and Tech Document Template
      </Typography>
      <Button variant="contained" color="primary" href="/files/project_docs_template.docx" download>
        Download Project & Tech Document Template
      </Button>
    </Container>
  );
};

export default ProjectDocs;
