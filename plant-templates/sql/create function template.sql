-- FUNCTION: plant_templates_test.fn_get_all_weeks()

-- DROP FUNCTION plant_templates_test.fn_get_all_weeks();

CREATE OR REPLACE FUNCTION plant_templates_test.fn_get_all_weeks(
	)
    RETURNS json
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
    ROWS 1000
AS $BODY$

begin
	
    return query
    select 
        json_agg(data) as record
    FROM (
        select 
            w.week_id,
            w.description,
            w.date_created
        from week w
        order by date_created desc
    ) data;



end

$BODY$;

ALTER FUNCTION plant_templates_test.fn_get_all_weeks()
    OWNER TO postgres;
