select "genres"."name" as "genre",
        count(*) as "# of movies"
from "genres"
join "filmGenre" using ("genreId")
join "films" using ("filmId")
join "castMembers" using ("filmId")
join "actors" using ("actorId")
where "actors"."firstName" = 'Lisa' and "actors"."lastName" = 'Monroe'
group by "genres"."genreId"
