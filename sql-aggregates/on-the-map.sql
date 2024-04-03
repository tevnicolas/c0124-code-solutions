select "co"."name",
      count(*) as "count"
  from "countries" as "co"
  join "cities" as "ci" using("countryId")
  group by "co"."countryId";
