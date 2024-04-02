select "c"."firstName",
      "c"."lastName",
      sum("p"."amount") as "total balance history"
  from "customers" as "c"
  join "payments" as "p" using ("customerId")
  group by "c"."customerId"
