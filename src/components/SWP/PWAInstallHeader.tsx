// src/components/PWAInstallHeader.tsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import usePWAInstallPrompt from "../../hooks/usePWAInstallPrompt";

const PWAInstallHeader = () => {
  const { isPromptVisible, handleInstallClick, Onclose } =
    usePWAInstallPrompt();

  return (
    <AppBar
      position="static"
      color="default"
      sx={{ display: isPromptVisible ? "block" : "none" }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="close"
          onClick={() => {
            Onclose();
          }}
        >
          <CloseIcon />
        </IconButton>
        <Avatar
          src={`${process.env.REACT_APP_PUBLIC_URL}assets/images/logo.png`}
          alt="Online Shop"
          sx={{ marginRight: 2 }}
        />
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" noWrap>
              Online Shop
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" noWrap>
              Your Daily Shop App
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={handleInstallClick}
            >
              Install App
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default PWAInstallHeader;
