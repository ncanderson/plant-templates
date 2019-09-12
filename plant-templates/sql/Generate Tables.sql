CREATE TABLE application_user
(
  user_id uuid NOT NULL,
  name_user varchar(100) NOT NULL,
  login_user varchar(100) NOT NULL,
  email_user varchar(100) NOT NULL,
  password_hash varchar(50) NULL,
  password_salt uuid NOT NULL,
  date_created timestamp NOT NULL,
  date_last_logged_in timestamp,
  PRIMARY KEY (user_id)
);

CREATE TABLE sheet_attribute
(
  attribute_id uuid NOT NULL,
  description varchar(100) NOT NULL,
  PRIMARY KEY (attribute_id)
);

CREATE TABLE sheet
(
  sheet_id uuid NOT NULL,
  date_created timestamp NOT NULL,
  created_by uuid NOT NULL,
  PRIMARY KEY (sheet_id),
  FOREIGN KEY (created_by) REFERENCES application_user(user_id)
);

CREATE TABLE week
(
  week_Id uuid NOT NULL,
  Description varchar(100) NOT NULL,
  date_created timestamp NOT NULL,
  created_by uuid NOT NULL,
  PRIMARY KEY (week_Id),
  FOREIGN KEY (created_by) REFERENCES application_user(user_id)
);

CREATE TABLE sheet_attribute_value
(
  attribute_value_id uuid NOT NULL,
  date_created timestamp NOT NULL,
  sheet_id uuid NOT NULL,
  attribute_id uuid NOT NULL,
  attribute_value varchar not null,
  created_by uuid NOT NULL,
  PRIMARY KEY (sheet_id, attribute_id),
  FOREIGN KEY (sheet_id) REFERENCES sheet(sheet_id),
  FOREIGN KEY (attribute_id) REFERENCES sheet_attribute(attribute_id),
  FOREIGN KEY (created_by) REFERENCES application_user(user_id)
);

CREATE TABLE sheet_week
(
  week_Id uuid NOT NULL,
  sheet_id uuid NOT NULL,
  PRIMARY KEY (week_Id, sheet_id),
  FOREIGN KEY (week_Id) REFERENCES week(week_Id),
  FOREIGN KEY (sheet_id) REFERENCES sheet(sheet_id)
);