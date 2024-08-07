CREATE TABLE "user_fav_games"(
    "id" BIGINT NOT NULL,
    "user" TEXT NOT NULL,
    "game_slug" TEXT NOT NULL
);
ALTER TABLE
    "user_fav_games" ADD PRIMARY KEY("id");
CREATE TABLE "nook_comments"(
    "id" BIGINT NOT NULL,
    "username" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "score" BIGINT NOT NULL,
    "game_slug" TEXT NOT NULL
);
ALTER TABLE
    "nook_comments" ADD PRIMARY KEY("id");