import { Azkary } from "../models/Azkary.model.js";

const azkaryController = {
  getAzkary: async (req, res) => {
    const azkars = await Azkary.find();
    res.json(azkars);
  },
  createAzkary: async (req, res) => {
    const {
      headerText,
      number,
      arabText,
      translateText,
      transcriptText,
      discriptionText,
      footerCount,
      footerName,
    } = req.body;
    try {
      const azkary = await Azkary.create({
        headerText,
        number,
        arabText,
        translateText,
        transcriptText,
        discriptionText,
        footerCount,
        footerName,
      });
      return res.json(azkary);
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  },
};

export default azkaryController;
