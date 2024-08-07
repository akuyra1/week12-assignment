CREATE TABLE "nook_games" (
    "id" SERIAL PRIMARY KEY,
    "api_query" TEXT NOT NULL
);

CREATE TABLE "nook_users" (
    "id" SERIAL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "clerk_id" TEXT NOT NULL
);

CREATE TABLE "user_fav_games" (
    "id" SERIAL PRIMARY KEY,
    "user" TEXT NOT NULL,
    "game" TEXT NOT NULL,
    FOREIGN KEY ("user") REFERENCES "nook_users"("id"),
    FOREIGN KEY ("game") REFERENCES "nook_games"("id")
);


CREATE TABLE "nook_comments" (
    "id" SERIAL PRIMARY KEY,
    "user_id" BIGINT NOT NULL,
    "comment" TEXT NOT NULL,
    "score" BIGINT NOT NULL,
    "game_id" BIGINT NOT NULL,
    FOREIGN KEY ("user_id") REFERENCES "nook_users"("clerk_id"),
    FOREIGN KEY ("game_id") REFERENCES "nook_games"("id")
);