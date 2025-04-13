import type { Question } from "@/types/Question";

const wildlifeQuestions: Record<string, Question[]> = {
  week1: [
    {
      question: '"Enquiry into plants" is a book written by',
      options: ["Theophrastus", "Linnaeus", "Malthus", "Humboldt"],
      answer: "Theophrastus",
    },
    {
      question: "In the Greek word root of Ecology, Oikos refers to",
      options: ["household", "preservation", "environment", "study"],
      answer: "household",
    },
    {
      question: "In the Greek word root of Ecology, logos refers to",
      options: ["household", "preservation", "environment", "study"],
      answer: "study",
    },
    {
      question:
        "Ecology is the scientific study of interactions among organisms and their_____. (fill in the blanks)",
      options: ["habitat", "niche", "environment", "population"],
      answer: "environment",
    },
    {
      question: "Who amongst these is considered the father of Biogeography?",
      options: ["Theophrastus", "Linnaeus", "Malthus", "Humboldt"],
      answer: "Humboldt",
    },
    {
      question: "Which of these is not a characteristics of fitness?",
      options: [
        "Fitness id environment- specific",
        "Fitness is species- specific",
        "Higher reproductive rate means higher fitness",
        "Fitness should be measured across several generations",
      ],
      answer: "Higher reproductive rate means higher fitness",
    },
    {
      question: "Which of these is not a kind of selection",
      options: ["directional", "stochastic", "disruptive", "stabilising"],
      answer: "stochastic",
    },
    {
      question:
        "Ecology is the scientific study of _______that determine the distribution and abundance of organisms. (Fill in the blanks)",
      options: ["statics", "interactions", "dynamics", "habitat"],
      answer: "interactions",
    },
    {
      question: "Which of these is not a characteristic of fitness?",
      options: [
        "Fitness is environment-specific.",
        "Fitness is species-specific.",
        "Fitness works on traits such as size and speed.",
        "Fitness should be measured across several generations.",
      ],
      answer: "Fitness works on traits such as size and speed.",
    },
    {
      question: "Which of these is not a step in natural selection?",
      options: [
        "variation",
        "underpopulation",
        "struggle for existence",
        "survival of the fittest",
      ],
      answer: "underpopulation",
    },
  ],
  week2: [
    {
      question:
        "Hierarchy emerges almost inevitably through a wide variety of evolutionary processes, for the simple reason that hierarchical structures are _____ (fill in the blank)",
      options: ["perfect", "imperfect", "stable", "unstable"],
      answer: "stable",
    },
    {
      question: "the mitochondrion is a/an",
      options: ["sub-cellular organelle", "cell", "tissue", "organ"],
      answer: "sub-cellular organelle",
    },
    {
      question: "the laboratory approach to ecology uses",
      options: ["equations", "models", "observations", "experiments"],
      answer: "experiments",
    },
    {
      question: '"the diversity that exists among different geographies" are',
      options: [
        "alpha biodiversity",
        "beta biodiversity",
        "gamma biodiversity",
        "delta biodiversity",
      ],
      answer: "gamma biodiversity",
    },
    {
      question: "the hierarchical system was given by",
      options: ["simon", "watson", "hutchinson", "humboldt"],
      answer: "simon",
    },
    {
      question:
        '"groups of actually or potentially interbreeding natural populations, which are reproductively isolated from other such species" is a definition of',
      options: ["cells", "species", "ecosystems", "biomes"],
      answer: "species",
    },
    {
      question: '"the diversity that exists within an ecosystem" is',
      options: [
        "alpha biodiversity",
        "beta biodiversity",
        "gamma biodiversity",
        "delta biodiversity",
      ],
      answer: "alpha biodiversity",
    },
    {
      question: "the emergent principle can be stated as",
      options: [
        "whole = sum of parts",
        "whole < sum of parts",
        "whole > sum of parts",
        "none of these",
      ],
      answer: "whole > sum of parts",
    },
    {
      question: "there is more biodiversity in areas with",
      options: [
        "less competition, less predation",
        "less competition, more predation",
        "more competition, more predation",
        "more competition, less predation",
      ],
      answer: "more competition, more predation",
    },
    {
      question: "for more biodiversity, the level of disturbance should be",
      options: ["less", "intermediate", "more", "none of these"],
      answer: "intermediate",
    },
  ],
  week3: [
    {
      question: "birds on giraffe are an example of",
      options: ["colony", "commensalism", "protocooperation", "allelopathy"],
      answer: "protocooperation",
    },
    {
      question: "egrets with buffaloes are an example of",
      options: ["colony", "commensalism", "protocooperation", "allelopathy"],
      answer: "commensalism",
    },
    {
      question: "the scientific study of animal behaviour is called",
      options: ["behaviourism", "ecology", "ethology", "prey- predator dynamics"],
      answer: "ethology",
    },
    {
      question:
        "the interaction between exotic shrubs and trees through the action of seed predators is an example of",
      options: [
        "infraspecific competition",
        "apparent competition",
        "disguised competition",
        "harmonious competition",
      ],
      answer: "apparent competition",
    },
    {
      question: "harmonious competition occur where",
      options: [
        "at least one participant is benefited",
        "at least one participant is unharmed",
        "both participants are benefited",
        "both participants are unharmed",
      ],
      answer: "both participants are unharmed",
    },
    {
      question: "Hamilton's rule can be stated as",
      options: ["rB < C", "rB > C", "rB = C", "rB + C = 0"],
      answer: "rB > C",
    },
    {
      question: "trampling of grass due to the movement of animals is an example of",
      options: ["mutualism", "ammensalism", "commensalism", "protocooperation"],
      answer: "ammensalism",
    },
    {
      question:
        "i observe a monkey take a tick out of another monkey's head and ear it. In the social context, this behaviour would be called",
      options: ["tick hunting", "auto grooming", "allo grooming", "foraging"],
      answer: "allo grooming",
    },
    {
      question:
        "an inventory of behaviours exhibited by an animal during a behaviour exercise is called",
      options: ["ecogram", "ethogram", "behaviourogram", "animalogram"],
      answer: "ethogram",
    },
    {
      question:
        "i observe a bird take a tick out of another bird's head and eat it. in the social context, this behaviour would be called",
      options: ["tick hunting", "auto grooming", "allo grooming", "foraging"],
      answer: "allo grooming",
    },
  ],
  week4: [
    {
      question:
        "consider the food chain\ngrass --> grasshopper --> frog --> snake --> hawk\nas we move up the food chain,",
      options: [
        "available energy decreases",
        "available energy increases",
        "available energy remains same",
        "available energy is zero everywhere",
      ],
      answer: "available energy decreases",
    },
    {
      question:
        "consider the food chain\ngrass --> grasshopper --> frog --> snake --> hawk\nin the food chain",
      options: [
        "hawk is producer",
        "hawk is consumer and carnivore",
        "hawk is consumer and herbivore",
        "hawk is decomposer",
      ],
      answer: "hawk is consumer and carnivore",
    },
    {
      question: "trees --> birds --> parasites --> hyperparasites represent",
      options: [
        "upright pyramid of numbers",
        "inverted pyramid of numbers",
        "spindle pyramid of numbers",
        "dumb-bell pyramid of numbers",
      ],
      answer: "inverted pyramid of numbers",
    },
    {
      question:
        "consider the food chain\ngrass --> grasshopper --> frog --> snake --> hawk\nin this food chain",
      options: [
        "frog is producer",
        "frog is consumer and carnivore",
        "frog is consumer and herbivore",
        "frog is decomposer",
      ],
      answer: "frog is consumer and carnivore",
    },
    {
      question: "at the compensation point",
      options: [
        "photosynthesis = respiration",
        "photosynthesis < respiration",
        "photosynthesis > respiration",
        "photosynthesis = 0",
      ],
      answer: "photosynthesis = respiration",
    },
    {
      question: "tree --> frugivorous birds --> hawk represents",
      options: [
        "upright pyramid of numbers",
        "inverted pyramid of numbers",
        "spindle pyramid of numbers",
        "dumb-bell pyramid of numbers",
      ],
      answer: "spindle pyramid of numbers",
    },
    {
      question: "glacial lakes are typical examples of",
      options: [
        "eutrophic lakes",
        "hypereutrophic lakes",
        "oligotrophic lakes",
        "mesotrophic lakes",
      ],
      answer: "oligotrophic lakes",
    },
    {
      question:
        "consider the food chain\ngrass --> grasshopper --> frog --> snake -->hawk\nin this food chain",
      options: [
        "more numbers of hawks than grasshoppers can be supported",
        "more numbers of grasshoppers than hawks can be supported",
        "equal numbers of hawks and grasshoppers can be supported",
        "non of these",
      ],
      answer: "more numbers of grasshoppers than hawks can be supported",
    },
    {
      question:
        "if we all become vegetarians, we'll be able to support our large populations. this can be explained through",
      options: ["10% rule", "1% rule", "trophic cascades", "biodiversity"],
      answer: "10% rule",
    },
    {
      question: "net primary productivity is given by",
      options: ["APAR x LUE", "APAR + LUE", "APAR - LUE", "APAR / LUE"],
      answer: "APAR x LUE",
    },
  ],
  week5: [
    {
      question: "____ is how close the measured values are to the correct value",
      options: ["accuracy", "precision", "bias", "variance"],
      answer: "accuracy",
    },
    {
      question: "which of these us not a measure of absolute population density?",
      options: ["total count", "pelt count", "capture- recapture method", "removal method"],
      answer: "pelt count",
    },
    {
      question: "the logistic growth equation, when plotted, appears",
      options: ["I shaped", "J shaped", "S shaped", "O shaped"],
      answer: "S shaped",
    },
    {
      question:
        "______ employs a simple rule of selecting every kth unit starting with a number chosen at random from 1 to k as the random start",
      options: [
        "simple random sampling",
        "systematic sampling",
        "stratifies sampling",
        "multistage sampling",
      ],
      answer: "systematic sampling",
    },
    {
      question: "the juvenile mortality rate is the annual number of death of juveniles per",
      options: ["100 births", "1000 births", "100 live births", "1000 live births"],
      answer: "1000 live births",
    },
    {
      question:
        "the minimum replacement level fertility for a population to grow should be greater than",
      options: ["1", "2", "3", "4"],
      answer: "2",
    },
    {
      question: "pan traps are used for sampling",
      options: ["bees", "butterflies", "non- pollinator insects", "pollinator insects"],
      answer: "pollinator insects",
    },
    {
      question: "which of these is true",
      options: [
        "physiological longevity > ecological longevity",
        "physiological longevity = ecological longevity",
        "physiological longevity < ecological longevity",
        "a or b",
      ],
      answer: "a or b",
    },
    {
      question:
        "a sampling procedure such that each possible combination of sampling units out of the population has the same chance of being selected is referred to as",
      options: [
        "simple random sampling",
        "systematic sampling",
        "stratified sampling",
        "multistage sampling",
      ],
      answer: "simple random sampling",
    },
    {
      question: "cover board surveys are typically used for sampling",
      options: ["herpetofauna", "fishes", "large mammals", "carnivores"],
      answer: "herpetofauna",
    },
  ],
  week6: [
    {
      question: "a climax caused by wildfires is an example of",
      options: ["climatic climax", "edaphic climax", "disclimax", "catastrophic climax"],
      answer: "catastrophic climax",
    },
    {
      question: "when compared to generalist species, specialist species have",
      options: ["narrower niches", "broader niches", "same-size niches", "none of these"],
      answer: "narrower niches",
    },
    {
      question: "which of these depicts correctly the lithosere primary succession",
      options: [
        "rock --> crustose lichen --> foliose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax",
        "rock --> foliose lichen --> crustose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax",
        "moss --> crustose lichen --> foliose lichen --> rock --> herbaceous stage --> shrub --> woodland --> climax",
        "rock --> crustose lichen --> foliose lichen --> shrub --> herbaceous stage --> moss --> woodland --> climax",
      ],
      answer:
        "rock --> crustose lichen --> foliose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax",
    },
    {
      question: "importance value can be written as",
      options: [
        "relative density + relative frequency X relative dominance",
        "relative density X relative frequency + relative dominance",
        "relative density + relative frequency + relative dominance",
        "relative density X relative frequency X relative dominance",
      ],
      answer: "relative density + relative frequency + relative dominance",
    },
    {
      question: "lithosere is an example of",
      options: ["hydrosere", "xerosere", "psammosere", "halosere"],
      answer: "xerosere",
    },
    {
      question: "importance value varies from",
      options: ["0 to 10", "0 to 50", "0 to 100", "0 to 300"],
      answer: "0 to 300",
    },
    {
      question:
        "a species found most frequently in a particular community, but also present occasionally in others is called",
      options: [
        "accidental species",
        "indifferent species",
        "selective species",
        "exclusive species",
      ],
      answer: "selective species",
    },
    {
      question:
        "the climax near Tindi village is being controlled by disturbance by cattle. this is an example of",
      options: ["climatic climax", "edaphic climax", "disclimax", "catastrophic climax"],
      answer: "disclimax",
    },
    {
      question: "which of these is correct?",
      options: [
        "fundamental niche > realised niche",
        "fundamental niche = realised niche",
        "fundamental niche < realised niche",
        "a or b",
      ],
      answer: "a or b",
    },
    {
      question: "which of these is not a characteristic of pioneer species",
      options: [
        "ability to grow on bare rocks",
        "ability to tolerate extreme temperatures",
        "large size",
        "short life span",
      ],
      answer: "large size",
    },
  ],
  week7: [
    {
      question:
        "i tried growing vegetables under my teak plantation, but the vegetable plants died out. i should be concerned about",
      options: ["autophagy", "allelophagy", "autopathy", "allelopathy"],
      answer: "allelopathy",
    },
    {
      question: "which of these is a physical factor of habitat?",
      options: ["soil", "moisture", "predators", "temperatures"],
      answer: "predators",
    },
    {
      question:
        '"the rate of biological process is limited by that factor in least amount relative to requirement, so there is a single limiting factor" this is the statement for',
      options: [
        "Liebig's law of minimum",
        "Liebig's law of maximum",
        "Shelford's law of tolerance",
        "Shelford's law of intolerance",
      ],
      answer: "Liebig's law of minimum",
    },
    {
      question: "transplantation experiments are used to find",
      options: ["potential range", "effective range", "actual range", "economic range"],
      answer: "potential range",
    },
    {
      question:
        '"quick movement over large distances, often across unsuitable terrain" is a definition of',
      options: ["diffusion", "secular dispersal", "jump dispersal", "drifting"],
      answer: "jump dispersal",
    },
    {
      question: "the movement of lions across the Gir landscape is an example of",
      options: ["diffusion", "secular dispersal", "jump dispersal", "drifting"],
      answer: "diffusion",
    },
    {
      question: "good climate is a",
      options: ["chemical factor", "demographic factor", "push factor", "pull factor"],
      answer: "pull factor",
    },
    {
      question: "scarcity of food is a",
      options: ["chemical factor", "demographic factor", "push factor", "pull factor"],
      answer: "push factor",
    },
    {
      question:
        '"the geographical distribution of a species will be controlled by that environment factor for which the organism has the narrowest range of tolerance" this is the statement for',
      options: [
        "Liebig's law of minimum",
        "Liebig's law of maximum",
        "Shelford's law of tolerance",
        "Shelford's law of intolerance",
      ],
      answer: "Shelford's law of tolerance",
    },
    {
      question:
        "the movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called",
      options: ["translocation", "migration", "dispersal", "drifting"],
      answer: "dispersal",
    },
  ],
  week8: [
    {
      question: "According to Leopold, which of these is not a tool of habitat management",
      options: ["fire", "gun", "cattle", "sickle"],
      answer: "sickle",
    },
    {
      question: "which of these correctly represents the process of habitat fragmentation and loss",
      options: [
        "original forest --> dissection --> perforation --> fragmentation --> attrition",
        "original forest --> dissection --> attrition --> fragmentation --> perforation",
        "original forest --> dissection --> perforation --> attrition --> fragmentation",
        "original forest --> dissection --> fragmentation --> perforation --> attrition",
      ],
      answer: "original forest --> dissection --> perforation --> fragmentation --> attrition",
    },
    {
      question:
        "we prefer those areas for the creation of conservation reserve where the level of threat is",
      options: ["very high", "medium", "very low", "non-existent"],
      answer: "medium",
    },
    {
      question:
        'the "subset of physical and biotic environmental factors that permit an animal (or plant) to survive and reproduce" is the definition of',
      options: ["habitat", "ecosystem", "biome", "biosphere"],
      answer: "habitat",
    },
    {
      question: "captive breeding is an example of",
      options: [
        "in-situ conservation",
        "ex-situ conservation",
        "in-situ preservation",
        "ex-situ preservation",
      ],
      answer: "ex-situ conservation",
    },
    {
      question: "which of these is a deterministic factor?",
      options: ["environmental variation", "forest fire", "death rate", "diseases"],
      answer: "death rate",
    },
    {
      question: "which of these is a stochastic factor",
      options: ["birth rate", "death rate", "population structure", "environmental fluctuation"],
      answer: "environmental fluctuation",
    },
    {
      question: "zoo is an example of",
      options: [
        "in-situ conservation",
        "ex-situ conservation",
        "in-situ preservation",
        "ex-situ preservation",
      ],
      answer: "ex-situ conservation",
    },
    {
      question: "the acronym HIPPO does not include",
      options: [
        "habitat loss",
        "habitat enhancement",
        "invasive species",
        "human over- population",
      ],
      answer: "habitat enhancement",
    },
    {
      question: "the acronym HIPPO does not include",
      options: ["habitat loss", "invasive species", "pollination", "pollution"],
      answer: "pollination",
    },
  ],
  week9: [
    {
      question: "which of these is a positive check according to Malthus?",
      options: ["late marriage", "war", "celibacy", "moral restraint"],
      answer: "war",
    },
    {
      question: "the demographic transition sees a society move from",
      options: [
        "high birth rate, low death rate to low birth rate, low death rate",
        "low birth rate, high death rate to low birth rate, low death rate",
        "high birth rate, high death rate to low birth rate, low death rate",
        "high birth rate, high death rate to low birth rate, high death rate",
      ],
      answer: "high birth rate, high death rate to low birth rate, low death rate",
    },
    {
      question: "according to Malthusian model",
      options: [
        "population grows in geometric progression, food supply increases in arithmetic progression",
        "population grows in geometric progression, food supply increases in geometric progression",
        "population grows in arithmetic progression, food supply increases in arithmetic progression",
        "population grows in arithmetic progression, food supply increases in geometric progression",
      ],
      answer:
        "population grows in geometric progression, food supply increases in arithmetic progression",
    },
    {
      question: 'the book "An essay on the principle of population" was written by',
      options: ["Darwin", "Malthus", "Spencer", "Owens"],
      answer: "Malthus",
    },
    {
      question:
        "_______ is used to identify which potential impacts are relevant to assess. (fill in the blank)",
      options: ["screening", "scoping", "reporting", "review"],
      answer: "scoping",
    },
    {
      question: "which of these is preventive check according to Malthus?",
      options: ["foresight", "vice", "misery", "flood"],
      answer: "foresight",
    },
    {
      question:
        "______ determines which projects or developments require a full or partial impact assessment study. (fill in the blank)",
      options: ["screening", "scoping", "reporting", "review"],
      answer: "screening",
    },
    {
      question: "which of these is a pillar of sustainability",
      options: [
        "social sustainability",
        "industrial sustainability",
        "agricultural sustainability",
        "trans- boundary sustainability",
      ],
      answer: "social sustainability",
    },
    {
      question: "which of these is not a pillar of sustainability ?",
      options: [
        "environmental sustainability",
        "economic sustainability",
        "trans- boundary sustainability",
        "agricultural sustainability",
      ],
      answer: "trans- boundary sustainability",
    },
    {
      question: "the quantum of human impacts is given by",
      options: ["I = P X A X T", "I = P + A + T", "I = P + A - T", "I = P - (A+T)"],
      answer: "I = P X A X T",
    },
  ],
  week10: [
    {
      question: "which of these is not a climatic forcing for Earth?",
      options: [
        "changes in plates tectonics",
        "changes in Earth's orbit",
        "changes in Sun's orbit",
        "changes in Sun's strength",
      ],
      answer: "changes in Sun's orbit",
    },
    {
      question: "Mesodebris in the context of plastic debris has fragment of size",
      options: [">20mm", "5-20 mm", "<5mm", "<1mm"],
      answer: "5-20 mm",
    },
    {
      question: "macrodebris in the context of plastic debris had fragment of size",
      options: [">20mm", "5-20mm", "<5mm", "<1mm"],
      answer: ">20mm",
    },
    {
      question:
        '"any changes in natural or human systems that inadvertently increase vulnerability to climatic stimuli; an adaptation that does not succeed in reducing vulnerability but increase it instead" is a definition of',
      options: ["adaptation", "mitigation", "maladaptation", "malmitigation"],
      answer: "maladaptation",
    },
    {
      question: "which of these is not a principle of ecological restoration?",
      options: [
        "ecological integrity",
        "long term sustainability",
        "benefits and engages scientists",
        "informed by past and future",
      ],
      answer: "benefits and engages scientists",
    },
    {
      question:
        "the government came up with a regulation that incandescent bulbs be replaced by LED bulbs, so that electricity consumption and release of carbon dioxide from power plants is reduced. in the context of climate change, such an action would be called",
      options: ["adaptation", "mitigation", "deceleration", "maladaptation"],
      answer: "mitigation",
    },
    {
      question: "which of these is not a principle of ecological restoration?",
      options: [
        "ecological integrity",
        "short term sustainability",
        "benefits and engages society",
        "informed by past and future",
      ],
      answer: "short term sustainability",
    },
    {
      question:
        '"the ability of a system to adjust to climate change (including climate variability and extremes) to moderate potential damages, to take advantage of opportunities, or to cope with the consequences" is a definition of',
      options: [
        "adaptive response",
        "adaptive capacity",
        "mitigative response",
        "mitigative capacity",
      ],
      answer: "adaptive capacity",
    },
    {
      question: "which of these is not a climatic forcing for Earth?",
      options: [
        "changes in plate tectonics",
        "changes in Earth's orbit",
        "changes in Moon's orbit",
        "changes in Sun's strength",
      ],
      answer: "changes in Moon's orbit",
    },
    {
      question:
        "because of climate change, Mudumalai tiger reserve is suffering from frequent droughts. the management has built several artificial water holes for animals, and fills them up regularly with tankers. in the context of climate change, such an action would be called",
      options: ["adaptation", "mitigation", "deceleration", "maladaptation"],
      answer: "adaptation",
    },
  ],
  week11: [
    {
      question: "which of these is correct?",
      options: ["R + G = M + F", "R + M = G + F", "R + F = M + G", "R + G + M + F = 0"],
      answer: "R + G = M + F",
    },
    {
      question: "which of these is not an impact of toxic chemicals?",
      options: [
        "lethal effects",
        "sub- lethal effects",
        "reduction of existing stressors",
        "reduced fecundity",
      ],
      answer: "reduction of existing stressors",
    },
    {
      question: "a pest population is called controlled when",
      options: [
        "it is not increasing",
        "it is decreasing",
        "it is not causing any economic damage",
        "it is not causing excessive economic damage",
      ],
      answer: "it is not causing excessive economic damage",
    },
    {
      question:
        "a deciduous forest in Madhya Pradesh was converted to a mine. after the mining operations were over, the pits were filled up with soil and species of deciduous forest planted again. this is an example of",
      options: ["recovery", "restoration", "enhancement", "replacement"],
      answer: "restoration",
    },
    {
      question: "the root zone treatment plant is an example of",
      options: ["phytoremediation", "biological control", "biomagnification", "bioaccumulation"],
      answer: "phytoremediation",
    },
    {
      question: "a pest population called uncontrolled when",
      options: [
        "it is increasing",
        "it is not decreasing",
        "it is causing some economic damage",
        "it is causing excessive economic damage",
      ],
      answer: "it is causing excessive economic damage",
    },
    {
      question: "the impact of El Nino on fishery in Peru is explained by",
      options: [
        "match hypothesis",
        "mismatch hypothesis",
        "match- mismatch hypothesis",
        "non of these",
      ],
      answer: "match- mismatch hypothesis",
    },
    {
      question: "which of these is correct",
      options: [
        "the maximum sustainable yield is near the beginning of the sigmoidal curve",
        "the maximum sustainable yield is near the mid-pount of the sigmoidal curve",
        "the maximum sustainable yield is near the end of the sigmoidal curve",
        "none of these",
      ],
      answer: "the maximum sustainable yield is near the mid-pount of the sigmoidal curve",
    },
    {
      question: "Ludwig's ratchet predicts",
      options: [
        "decreasing harvesting rate",
        "constant harvesting rate",
        "increasing harvesting rate",
        "fluctuating harvesting rate",
      ],
      answer: "increasing harvesting rate",
    },
    {
      question:
        "a deciduous forest in Madhya Pradesh was converted to a mine. after the mining operations were over, the pits were filled up with water and a lake was created. it is now visited by several migratory birds. this is an example of",
      options: ["recovery", "restoration", "enhancement", "replacement"],
      answer: "replacement",
    },
  ],
  week12: [
    {
      question: '"Enquiry into plants" is a book written by',
      options: ["Theophrastus", "Linnaeus", "Malthus", "Humboldt"],
      answer: "Theophrastus",
    },
    {
      question: "The mitochondrion is a/an",
      options: ["sub-cellular organelle", "cell", "tissue", "organ"],
      answer: "sub-cellular organelle",
    },
    {
      question: "Which of these is not a pillar of sustainability?",
      options: [
        "environmental sustainability",
        "economic sustainability",
        "trans-boundary sustainability",
        "social sustainability",
      ],
      answer: "trans-boundary sustainability",
    },
    {
      question: "Good climate is a",
      options: ["chemical factor", "demographic factor", "push factor", "pull factor"],
      answer: "pull factor",
    },
    {
      question: "Importance value varies from",
      options: ["0 to 10", "0 to 50", "0 to 100", "0 to 300"],
      answer: "0 to 300",
    },
    {
      question:
        "Consider the food chain: grass → grasshopper → frog → snake → hawk. In this food chain",
      options: [
        "frog is producer",
        "frog is consumer and carnivore",
        "frog is consumer and herbivore",
        "frog is decomposer",
      ],
      answer: "frog is consumer and carnivore",
    },
    {
      question: "The juvenile mortality rate is the annual number of deaths of juveniles per",
      options: ["100 births", "1000 births", "100 live births", "1000 live births"],
      answer: "1000 live births",
    },
    {
      question:
        "Because of climate change, Mudumalai Tiger Reserve is suffering from frequent droughts. The management has built several artificial water holes for animals and fills them up regularly with tankers. In the context of climate change, such an action would be called",
      options: ["adaptation", "mitigation", "deceleration", "maladaptation"],
      answer: "adaptation",
    },
    {
      question: "The scientific study of animal behaviour is called",
      options: ["behaviourism", "ecology", "ethology", "prey-predator dynamics"],
      answer: "ethology",
    },
    {
      question: "A zoo is an example of",
      options: [
        "in-situ conservation",
        "ex-situ conservation",
        "in-situ preservation",
        "ex-situ preservation",
      ],
      answer: "ex-situ conservation",
    },
  ],
  week69: [
    {
      question:
        "The fig tree bears fruits in times when animals do not have much access to food. In this context, it would be a good example of",
      options: ["least concern species", "keystone species"],
      answer: "keystone species",
    },
    {
      question:
        "People come to Sessa orchid sanctuary in Arunachal Pradesh to witness orchids, which in this context would be classified as",
      options: ["umbrella species", "keystone species", "flagship species", "extinct species"],
      answer: "flagship species",
    },
    {
      question:
        "The tiger has a home range of several square kilometres, regulates the ecosystem through controlling herbivore populations and trophic cascades, and people come to tiger reserves to watch tigers. Thus, the tiger can be called as",
      options: ["umbrella species", "keystone species", "flagship species", "all of the above"],
      answer: "all of the above",
    },
    {
      question:
        "The elephant has a home range of several square kilometres, regulates the ecosystem by its habit of destructive feeding, and people can relate to this animal which is important for conservation Given this background, the elephant can be called as",
      options: ["umbrella species", "keystone species", "flagship species", "all of the above"],
      answer: "all of the above",
    },
    {
      question:
        "Consider the food chain: Grass → Grasshopper → Frog --> Snake → Hawk. In this food chain,",
      options: [
        "grass is producer",
        "grass is consumer",
        "grass is decomposer",
        "grass is herbivore",
      ],
      answer: "grass is producer",
    },
    {
      question:
        "Consider the food chain: Grass → Grasshopper → Frog --> Snake → Hawk. In this food chain,",
      options: [
        "grasshopper is producer",
        "grasshopper is consumer",
        "grasshopper is decomposer",
        "grasshopper is carnivore",
      ],
      answer: "grasshopper is consumer",
    },
    {
      question: "Which of the following best describes habitat selection?",
      options: [
        "Habitat selection is completely innate.",
        "Habitat selection is completely learnt.",
        "Habitat selection is neither innate nor learnt.",
        "Habitat selection has both innate and learnt components.",
      ],
      answer: "Habitat selection has both innate and learnt components.",
    },
    {
      question: "The regular, seasonal movement of animals, often along fixed routes is called",
      options: ["translocation", "migration", "dispersal", "drifting"],
      answer: "migration",
    },
  ],
};

export default wildlifeQuestions;
