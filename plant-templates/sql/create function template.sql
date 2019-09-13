create or replace function fn_get_all_weeks ()
returns table (
	week_id uuid,
    description varchar,
    date_created timestamp
)	
as $$
begin
	
    return query
    select 
    	w.week_id,
        w.description,
        w.date_created
    from week w
    order by date_created desc;

end
$$ language plpgsql;