CREATE TABLE "user_fav_games"(
    "id" BIGINT NOT NULL,
    "user" TEXT NOT NULL,
    "game" TEXT NOT NULL
);
ALTER TABLE
    "user_fav_games" ADD SERIAL PRIMARY KEY("id");
CREATE TABLE "nook_comments"(
    "id" BIGINT NOT NULL,
    "user_id" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "score" BIGINT NOT NULL,
    "game_id" TEXT NOT NULL
);
ALTER TABLE
    "nook_comments" ADD SERIAL PRIMARY KEY("id");
CREATE TABLE "nook_users"(
    "id" BIGINT NOT NULL,
    "username" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "clerk_id" TEXT NOT NULL
);
ALTER TABLE
    "nook_users" ADD SERIAL PRIMARY KEY("id");
CREATE TABLE "nook_games"(
    "id" BIGINT NOT NULL,
    "api_query" TEXT NOT NULL
);
ALTER TABLE
    "nook_games" ADD SERIAL PRIMARY KEY("id");
ALTER TABLE
    "nook_comments" ADD CONSTRAINT "nook_comments_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "nook_users"("id");
ALTER TABLE
    "nook_comments" ADD CONSTRAINT "nook_comments_game_id_foreign" FOREIGN KEY("game_id") REFERENCES "nook_games"("id");
ALTER TABLE
    "user_fav_games" ADD CONSTRAINT "user_fav_games_game_foreign" FOREIGN KEY("game") REFERENCES "nook_games"("id");
ALTER TABLE
    "user_fav_games" ADD CONSTRAINT "user_fav_games_user_foreign" FOREIGN KEY("user") REFERENCES "nook_users"("id");