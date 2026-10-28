import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import resumeIcon from "../assets/resumeIcon.png";

const PNF = () => {
  return (
    <Box
      sx={{
        minHeight: "70vh",
        px: 2,
        py: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
        bgcolor: "#f8f6f3",
      }}
    >
      <Box sx={{ maxWidth: 560 }}>
        <Box
          component="img"
          src={resumeIcon}
          alt="Floating resume illustration"
          sx={{
            width: { xs: 120, sm: 160 },
            mb: 2,
            animation: "float 3s ease-in-out infinite",
            "@keyframes float": {
              "0%, 100%": { transform: "translateY(0) rotate(-4deg)" },
              "50%": { transform: "translateY(-18px) rotate(4deg)" },
            },
          }}
        />
        <Typography
          component="h1"
          sx={{
            color: "#795037",
            fontSize: { xs: "5rem", sm: "7rem" },
            fontWeight: 800,
            lineHeight: 1,
          }}
        >
          404
        </Typography>
        <Typography variant="h4" sx={{ mt: 2, fontWeight: 700 }}>
          Page not found
        </Typography>
        <Typography sx={{ mt: 1, mb: 3, color: "text.secondary" }}>
          The page you were looking for doesn&apos;t exist or may have moved.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{
            bgcolor: "#795037",
            "&:hover": { bgcolor: "#5e3d2a" },
          }}
        >
          Back to home
        </Button>
      </Box>
    </Box>
  );
};

export default PNF