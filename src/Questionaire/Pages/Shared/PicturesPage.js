import React from "react";
import { Field } from "react-final-form";
import {
  StandardPage,
  RenderSimpleCheckbox,
  RenderCheckError
} from "../../../_components";
import { withStyles } from "@material-ui/core/styles";
import { PictureGrab } from "../../../_components/PictureGrab";

const styles = theme => ({
  picture: {
    margin: theme.spacing(1),
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center"
  }
});

const validatePictures = values => {
  const errors = { personal: {} };
  if (!values.personal.sendImageLater) {
    if (!values.personal.licenseImage) {
      errors.personal.licenseImage = "Please provide a photo of your ID.";
    }
  }

  return errors;
};

const questionText = "Verify your Identity";
const additionalText =
  "Your provider needs to verify your identity. They will do that by having you provide an image of a government issued ID that includes a picture of you.";

class PicturesPage extends React.Component {
  state = {
    image: ""
  };

  render() {
    const { classes, ...rest } = this.props;
    return (
      <StandardPage
        questionText={questionText}
        additionalText={additionalText}
        alignTitles="left"
        {...rest}
      >
        <div className={classes.picture}>
          <Field
            component={PictureGrab}
            name="personal.licenseImage"
            label="UPLOAD A PHOTO OF YOUR ID"
          />
        </div>
        <Field
          name="personal.sendImageLater"
          component={RenderSimpleCheckbox}
          label="I'll provide an image later."
        />
        <Field name="checkError" component={RenderCheckError} />
      </StandardPage>
    );
  }
}

PicturesPage = withStyles(styles)(PicturesPage);

export { PicturesPage, validatePictures };
