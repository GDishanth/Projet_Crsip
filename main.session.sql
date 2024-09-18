CREATE TABLE IF NOT EXISTS users (
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  pwd VARCHAR(255) NOT NULL,
  registration DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS skills (
  skill_name VARCHAR(255) NOT NULL,
  level INT NOT NULL,
  user INT NOT NULL,
  FOREIGN KEY(user) REFERENCES users(ROWID)
);

CREATE TABLE IF NOT EXISTS loginusers (
 oeuvrevu INT NOT NULL,
 email VARCHAR(255) NOT NULL,
  registration DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS vote (
 UserVote INT NOT NULL,
 email VARCHAR(255) NOT NULL,
  dateVote DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);




