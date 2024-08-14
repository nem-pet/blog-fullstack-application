CREATE TABLE blog_user(
    id               BIGINT NOT NULL GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    username         VARCHAR(100) NOT NULL,
    password         VARCHAR(100) NOT NULL,
    email            VARCHAR(100),
    phonenumber     VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE blog(
    id      BIGINT NOT NULL GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    user_id BIGINT NOT NULL,
    text    VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES blog_user(id)
);