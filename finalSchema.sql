CREATE TABLE "nook_user_fav_games"(
    "id" SERIAL PRIMARY KEY,
    "user" TEXT NOT NULL,
    "game_slug" TEXT NOT NULL
);

CREATE TABLE "nook_user_comments"(
    "id" SERIAL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "score" BIGINT NOT NULL,
    "game_slug" TEXT NOT NULL
);
