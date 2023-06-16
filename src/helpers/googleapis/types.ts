export type AnnotateImageRequest = {
  image?: Image;
  features?: Feature[];
  imageContext?: ImageContext;
};

export type AnnotateImageResponse = {
  faceAnnotations?: FaceAnnotation[];
  landmarkAnnotations?: EntityAnnotation[];
  logoAnnotations?: EntityAnnotation[];
  labelAnnotations?: EntityAnnotation[];
  localizedObjectAnnotations?: LocalizedObjectAnnotation[];
  textAnnotations?: EntityAnnotation[];
  fullTextAnnotation?: TextAnnotation;
  safeSearchAnnotation?: SafeSearchAnnotation;
  imagePropertiesAnnotation?: ImageProperties;
  cropHintsAnnotation?: CropHintsAnnotation;
  webDetection?: WebDetection;
  productSearchResults?: ProductSearchResults;
  error?: Status;
  context?: ImageAnnotationContext;
};

type Block = {
  property?: TextProperty;
  boundingBox?: BoundingPoly;
  paragraphs?: Paragraph[];
  blockType?: BlockType;
  confidence?: number;
};

type BlockType = "UNKNOWN" | "TEXT" | "TABLE" | "PICTURE" | "RULER" | "BARCODE";

type BoundingPoly = {
  vertices?: Vertex[];
  normalizedVertices?: NormalizedVertex[];
};

type BreakType =
  | "UNKNOWN"
  | "SPACE"
  | "SURE_SPACE"
  | "EOL_SURE_SPACE"
  | "HYPHEN"
  | "LINE_BREAK";

type Color = {
  red?: number;
  green?: number;
  blue?: number;
  alpha?: number;
};

type ColorInfo = {
  color?: Color;
  score?: number;
  pixelFraction?: number;
};

type CropHint = {
  boundingPoly?: BoundingPoly;
  confidence?: number;
  importanceFraction?: number;
};

type CropHintsAnnotation = {
  cropHints?: CropHint[];
};

type CropHintsParams = {
  aspectRatios?: number[];
};

type DetectedBreak = {
  type?: BreakType;
  isPrefix?: boolean;
};

type DetectedLanguage = {
  languageCode?: string;
  confidence?: number;
};

type DominantColorsAnnotation = {
  colors?: ColorInfo[];
};

type EntityAnnotation = {
  mid?: string;
  locale?: string;
  description?: string;
  score?: number;
  confidence?: number;
  topicality?: number;
  boundingPoly?: BoundingPoly;
  locations?: LocationInfo[];
  properties?: Property[];
};

type FaceAnnotation = {
  bounddingPoly?: BoundingPoly;
  fdBoundingPoly?: BoundingPoly;
  landmarks?: Landmark[];
  rollAngle?: number;
  panAngle?: number;
  tiltAngle?: number;
  detectionConfidence?: number;
  landmarkingConfidence?: number;
  joyLikelihood?: Likelihood;
  sorrowLikelihood?: Likelihood;
  angerLikelihood?: Likelihood;
  surpriseLikelihood?: Likelihood;
  underExposedLikelihood?: Likelihood;
  blurredLikelihood?: Likelihood;
  headwearLikelihood?: Likelihood;
};

type Feature = {
  type?: FeatureType;
  maxResults?: number;
  model?: string;
};

type FeatureType =
  | "TYPE_UNSPECIFIED"
  | "FACE_DETECTION"
  | "LANDMARK_DETECTION"
  | "LOGO_DETECTION"
  | "LABEL_DETECTION"
  | "TEXT_DETECTION"
  | "DOCUMENT_TEXT_DETECTION"
  | "SAFE_SEARCH_DETECTION"
  | "IMAGE_PROPERTIES"
  | "CROP_HINTS"
  | "WEB_DETECTION"
  | "PRODUCT_SEARCH"
  | "OBJECT_LOCALIZATION";

type GroupedResult = {
  boundingPoly?: BoundingPoly;
  results?: Result[];
  objectAnnotations?: ObjectAnnotation[];
};

type Image = {
  content?: string;
  source?: ImageSource;
};

type ImageAnnotationContext = {
  uri?: string;
  pageNumber?: number;
};

type ImageContext = {
  latLongRect?: LatLongRect;
  languageHints?: string[];
  cropHintsParams?: CropHintsParams;
  productSearchParams?: ProductSearchParams;
  webDetectionParams?: WebDetectionParams;
  textDetectionParams?: TextDetectionParams;
};

type ImageProperties = {
  dominantColors?: DominantColorsAnnotation;
};

type ImageSource = {
  gcsImageUri?: string;
  imageUri?: string;
};

type KeyValue = {
  key?: string;
  value?: string;
};

type Landmark = {
  type?: LandmarkType;
  position?: Position;
};

type LandmarkType =
  | "UNKNOWN_LANDMARK"
  | "LEFT_EYE"
  | "RIGHT_EYE"
  | "LEFT_OF_LEFT_EYEBROW"
  | "RIGHT_OF_LEFT_EYEBROW"
  | "LEFT_OF_RIGHT_EYEBROW"
  | "RIGHT_OF_RIGHT_EYEBROW"
  | "MIDPOINT_BETWEEN_EYES"
  | "NOSE_TIP"
  | "UPPER_LIP"
  | "LOWER_LIP"
  | "MOUTH_LEFT"
  | "MOUTH_RIGHT"
  | "MOUTH_CENTER"
  | "NOSE_BOTTOM_RIGHT"
  | "NOSE_BOTTOM_LEFT"
  | "NOSE_BOTTOM_CENTER"
  | "LEFT_EYE_TOP_BOUNDARY"
  | "LEFT_EYE_RIGHT_CORNER"
  | "LEFT_EYE_BOTTOM_BOUNDARY"
  | "LEFT_EYE_LEFT_CORNER"
  | "RIGHT_EYE_TOP_BOUNDARY"
  | "RIGHT_EYE_RIGHT_CORNER"
  | "RIGHT_EYE_BOTTOM_BOUNDARY"
  | "RIGHT_EYE_LEFT_CORNER"
  | "LEFT_EYEBROW_UPPER_MIDPOINT"
  | "RIGHT_EYEBROW_UPPER_MIDPOINT"
  | "LEFT_EAR_TRAGION"
  | "RIGHT_EAR_TRAGION"
  | "LEFT_EYE_PUPIL"
  | "RIGHT_EYE_PUPIL"
  | "FOREHEAD_GLABELLA"
  | "CHIN_GNATHION"
  | "CHIN_LEFT_GONION"
  | "CHIN_RIGHT_GONION"
  | "LEFT_CHEEK_CENTER"
  | "RIGHT_CHEEK_CENTER";

type LatLng = {
  latitude?: number;
  longitude?: number;
};

type LatLongRect = {
  minLatLng?: LatLng;
  maxLatLng?: LatLng;
};

type Likelihood =
  | "UNKNOWN"
  | "VERY_UNLIKELY"
  | "UNLIKELY"
  | "POSSIBLE"
  | "LIKELY"
  | "VERY_LIKELY";

type LocalizedObjectAnnotation = {
  mid?: string;
  languageCode?: string;
  name?: string;
  score?: number;
  boundingPoly?: BoundingPoly;
};

type LocationInfo = {
  latLng?: LatLng;
};

type NormalizedVertex = {
  x?: number;
  y?: number;
};

type ObjectAnnotation = {
  mid?: string;
  languageCode?: string;
  name?: string;
  score?: number;
};

type Page = {
  property?: TextProperty;
  width?: number;
  height?: number;
  blocks?: Block[];
  confidence?: number;
};

type Paragraph = {
  property?: TextProperty;
  boundingBox?: BoundingPoly;
  words?: Word[];
  confidence?: number;
};

type Position = {
  x?: number;
  y?: number;
  z?: number;
};

type Product = {
  name?: string;
  displayName?: string;
  description?: string;
  productCategory?: string;
  productLabels?: KeyValue[];
};

type ProductSearchParams = {
  boundingPoly?: BoundingPoly;
  productSet?: string;
  productCategories?: string[];
  filter?: string;
};

type ProductSearchResults = {
  indexTime?: string;
  results?: Result[];
  productGroupedResults?: GroupedResult[];
};

type Property = {
  name?: string;
  value?: string;
  uint64Value?: string;
};

type Result = {
  product?: Product;
  score?: number;
  image?: string;
};

type SafeSearchAnnotation = {
  adult?: Likelihood;
  spoof?: Likelihood;
  medical?: Likelihood;
  violence?: Likelihood;
  racy?: Likelihood;
};

type Status = {
  code?: number;
  message?: string;
  details?: ({ "@type"?: string } & Record<string, unknown>)[];
};

type _Symbol = {
  property?: TextProperty;
  boundingBox?: BoundingPoly;
  text?: string;
  confidence?: number;
};

type TextAnnotation = {
  pages?: Page[];
  text?: string;
};

type TextDetectionParams = {
  enableTextDetectionConfidenceScore?: boolean;
  advancedOcrOptions?: string[];
};

type TextProperty = {
  detectedLanguages?: DetectedLanguage[];
  detectedBreak?: DetectedBreak;
};

type Vertex = {
  x?: number;
  y?: number;
};

type WebDetection = {
  webEntities?: WebEntity[];
  fullMatchingImages?: WebImage[];
  partialMatchingImages?: WebImage[];
  pagesWithMatchingImages?: WebPage[];
  visuallySimilarImages?: WebImage[];
  bestGuessLabels?: WebLabel[];
};

type WebDetectionParams = {
  includeGeoResults?: boolean;
};

type WebEntity = {
  entityId?: string;
  score?: number;
  description?: string;
};

type WebImage = {
  url?: string;
  score?: number;
};

type WebLabel = {
  label?: string;
  languageCode?: string;
};

type WebPage = {
  url?: string;
  score?: number;
  pageTitle?: string;
  fullMatchingImages?: WebImage[];
  partialMatchingImages?: WebImage[];
};

type Word = {
  property?: TextProperty;
  boundingBox?: BoundingPoly;
  symbols?: _Symbol[];
  confidence?: number;
};
