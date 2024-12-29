import "../src/styles/styles.css";

import * as colour from "./contstants/colourVariables";

import { Box, Button, ThemeProvider, createTheme, useTheme } from '@mui/material';
import React, { useCallback, useState } from 'react';

import Form from './components/Form';
import WebSocketConnection from "./components/Websocket";
import { fontWeight } from "./contstants/styles";

function App() {
  const [showForm, setShowForm] = useState(true);
  const [showWebsockets, setShowWebsockets] = useState(false);

  let theme = useTheme();

  theme = createTheme(theme, {
    components: {

      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: colour.fieldBorder,
            },
          }
        }
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiInputBase-root': {
              '& fieldset': {
                borderColor: colour.fieldBorder,
              },
              '&.Mui-focused fieldset': {
                borderColor: colour.fieldBorder,
                borderWidth: "0.063rem"
              },
              height: '1.938rem',
              width: '19.438rem',
              borderRadius: '0.188rem',
              fontSize: "0.875rem",
              fontWeight: fontWeight.normal,
              lineHeight: "1.75rem"
            },
          }
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            marginRight: "0.313rem",
            fontSize: "0.875rem",
            lineHeight: "1.063rem",
            color: colour.darkGrey
          }
        },
      },
      typography: {
        fontFamily: "Roboto"
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            color: colour.darkGrey,
            "&.Mui-selected": {
              color: colour.charcoal,
              fontWeight: fontWeight.bolder,
            },
          }
        }
      },
    }
  });

  const onShowFormClick = useCallback(() => {
    setShowForm(true);
    setShowWebsockets(false);
  }, []);

  const onShowWebsocketsClick = useCallback(() => {
    setShowForm(false);
    setShowWebsockets(true);
  }, []);


  const onCloseClick = useCallback(() => {
    setShowForm(false);
  }, []);

  return (
    <>
      <Box sx={{ marginBottom: "30px" }}>
        <Button disableRipple onClick={onShowFormClick}>Show Form</Button>
        <Button disableRipple onClick={onShowWebsocketsClick}>Show websocket</Button>
      </Box>
      <ThemeProvider theme={theme}>
        {
          showForm && <Form
            headerText="Multiple Object Detection"
            footer={true}
            onCloseClick={onCloseClick}
          />
        }
        {
          showWebsockets && <WebSocketConnection />
        }
      </ThemeProvider>
    </>
  );
}

export default App;
